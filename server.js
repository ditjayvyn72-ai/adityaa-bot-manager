const express = require("express");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({
        success: true,
        name: "Adityaa Bot Manager",
        status: "online",
        message: "Backend berhasil berjalan 🚀"
    });
});

app.get("/api/status", (req, res) => {
    res.json({
        bot: "Adityaa Bot",
        whatsapp: "disconnected",
        qr: false,
        pairing: false
    });
});

app.listen(PORT, () => {
    console.log(
        `Adityaa Bot Manager berjalan di port ${PORT}`
    );
});
