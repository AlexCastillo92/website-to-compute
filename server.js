const express = require('express');
const cors = require('cors'); // opcional si consumirás desde otro dominio

const app = express();

app.use(express.json());
app.use(cors()); // opcional

let courses = [
  { id: 'C001', name: 'Programación I' },
  { id: 'C002', name: 'Estructuras de Datos' }
];

app.get('/courses', (req, res) => res.json(courses));

app.post('/enroll', (req, res) => {
  const { studentId, courseId } = req.body;
  if (!studentId || !courseId) {
    return res.status(400).json({ error: 'Faltan datos' });
  }
  res.json({ status: 'ok', studentId, courseId, message: 'Inscripción registrada' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`CourseService en ${PORT}`));
