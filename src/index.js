require('dotenv').config();
const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const rateLimit = require('express-rate-limit');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// CORS configuration
app.use(cors({
    origin: 'https://me-elogie.vercel.app',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
    credentials: true
}));

// Configure rate limiter
const limiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 15 minutos
    max: 5, // Limite de 50 requisições por IP
    message: {
        error: 'Muitas requisições. Por favor, tente novamente mais tarde',
        details: 'Rate Limit.'
    },
    standardHeaders: true,
    legacyHeaders: false
});

// Apply rate limiter to all routes
app.use(limiter);

app.use(express.json());

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/chat', async (req, res) => {
    try {
        const { text } = req.body;

        if (!text) {
            return res.status(400).json({ error: 'O texto do currículo é obrigatório' });
        }

        const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

        const systemPrompt = `Você é um consultor de carreira especializado em fazer elogios divertidos, genuínos e casuais baseados nas conquistas, habilidades, experiências, cursos, certificações das pessoas.
        Transforme este currículo em um elogio divertido, caloroso e personalizado.
        Analise as experiências, formação e habilidades, criando um texto entre 2 a 3 paragráfos que destaque os pontos fortes do candidato de forma criativa e inspiradora.
        Use um tom casual, amigável e otimista, como se estivesse conversando com um amigo.
        Comece com uma frase chamativa, celebre as conquistas únicas da pessoa, adicione um toque de humor e termine com uma mensagem motivacional.
        O objetivo é fazer o usuário sorrir, se sentir especial e valorizado, destacando o que o torna incrível além do papel profissional.

        Currículo:`;

        const prompt = {
            contents: [{
                parts: [{
                    text: `${systemPrompt}\n${text}`
                }]
            }]
        };

        const result = await model.generateContent(prompt);
        const response = await result.response;

        res.json({ result: response.text() });
    } catch (error) {
        console.error('Erro ao processar currículo:', error);
        res.status(500).json({
            error: 'Erro ao processar currículo',
            details: error.message
        });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
