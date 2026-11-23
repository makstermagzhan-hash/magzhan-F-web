import React, { useState } from 'react';
import { TRADITIONS } from '../data/traditions.js';
import Btn from '../components/Btn.jsx';

function buildQuestions() {
  const shuffled = [...TRADITIONS].sort(() => 0.5 - Math.random()).slice(0, 7);
  return shuffled.map((correctItem) => {
    const others = TRADITIONS.filter((t) => t.id !== correctItem.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    const options = [...others, correctItem].sort(() => 0.5 - Math.random());
    return {
      question: `«${correctItem.shortDesc}» — бұл қай салт-дәстүрге тән?`,
      answerId: correctItem.id,
      options,
    };
  });
}

export default function QuizScreen() {
  const [questions, setQuestions] = useState(buildQuestions);
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedId, setSelectedId] = useState(null);
  const [finished, setFinished] = useState(false);

  const current = questions[step];

  const handleAnswer = (id) => {
    if (selectedId) return;
    setSelectedId(id);
    if (id === current.answerId) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (step + 1 < questions.length) {
      setStep((s) => s + 1);
      setSelectedId(null);
    } else {
      setFinished(true);
    }
  };

  const restart = () => {
    setQuestions(buildQuestions());
    setStep(0);
    setScore(0);
    setSelectedId(null);
    setFinished(false);
  };

  if (finished) {
    return (
      <div className="main-wrap" style={{ maxWidth: '600px' }}>
        <div className="panel" style={{ textAlign: 'center' }}>
          <h2>Викторина аяқталды!</h2>
          <p style={{ fontSize: '1.2rem', margin: '16px 0' }}>
            Нәтижеңіз: <strong>{score} / {questions.length}</strong>
          </p>
          <Btn variant="gold" onClick={restart}>
            Қайта бастау
          </Btn>
        </div>
      </div>
    );
  }

  return (
    <div className="main-wrap" style={{ maxWidth: '680px' }}>
      <div className="panel">
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
          <span>Сұрақ {step + 1} / {questions.length}</span>
          <span>Ұпай: {score}</span>
        </div>

        <h3 style={{ marginBottom: '18px' }}>{current.question}</h3>

        <div>
          {current.options.map((opt) => {
            let cls = 'quiz-option';
            if (selectedId) {
              if (opt.id === current.answerId) cls += ' correct';
              else if (opt.id === selectedId) cls += ' wrong';
            }
            return (
              <button
                key={opt.id}
                className={cls}
                onClick={() => handleAnswer(opt.id)}
              >
                {opt.title}
              </button>
            );
          })}
        </div>

        {selectedId && (
          <div style={{ marginTop: '14px', textAlign: 'right' }}>
            <Btn variant="gold" onClick={handleNext}>
              {step + 1 === questions.length ? 'Нәтижені көру' : 'Келесі сұрақ'}
            </Btn>
          </div>
        )}
      </div>
    </div>
  );
}