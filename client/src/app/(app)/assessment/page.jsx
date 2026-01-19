"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, X, FileText } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCards';
import Button from '@/components/ui/Button';

const Assessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: 'What is the primary advantage of quantum computing over classical computing?',
      type: 'multiple',
      options: [
        'Faster processing speed',
        'Ability to process information using superposition and entanglement',
        'Lower energy consumption',
        'Smaller physical size'
      ],
      correct: 1
    },
    {
      id: 2,
      question: 'Which of the following are types of machine learning? (Select all that apply)',
      type: 'checkbox',
      options: [
        'Supervised Learning',
        'Quantum Learning',
        'Unsupervised Learning',
        'Reinforcement Learning'
      ],
      correct: [0, 2, 3]
    },
    {
      id: 3,
      question: 'Explain the concept of neural network backpropagation in your own words.',
      type: 'text',
      correct: null
    }
  ];

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (value) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q, i) => {
      if (q.type === 'multiple' && answers[i] === q.correct) correct++;
      if (q.type === 'checkbox' && JSON.stringify(answers[i]?.sort()) === JSON.stringify(q.correct.sort())) correct++;
    });
    return Math.round((correct / questions.filter(q => q.type !== 'text').length) * 100);
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="space-y-8">
        <h1 className="text-4xl font-bold text-white">Assessment Results</h1>
        
        <GlassCard className="p-12">
          <div className="text-center space-y-6">
            <div className="relative w-48 h-48 mx-auto">
              <svg className="transform -rotate-90 w-48 h-48">
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="rgba(31, 41, 55, 0.5)"
                  strokeWidth="12"
                  fill="none"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="url(#gradient)"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={`${score * 5.53} 553`}
                  strokeLinecap="round"
                  className="transition-all duration-1000"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div>
                  <p className="text-5xl font-bold text-white">{score}%</p>
                  <p className="text-gray-400 text-sm mt-2">Score</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                {score >= 80 ? 'Excellent Work!' : score >= 60 ? 'Good Job!' : 'Keep Learning!'}
              </h2>
              <p className="text-gray-400">
                You answered {questions.filter((q, i) => {
                  if (q.type === 'multiple') return answers[i] === q.correct;
                  if (q.type === 'checkbox') return JSON.stringify(answers[i]?.sort()) === JSON.stringify(q.correct.sort());
                  return false;
                }).length} out of {questions.filter(q => q.type !== 'text').length} questions correctly
              </p>
            </div>

            <div className="flex gap-4 justify-center">
              <Button onClick={() => {
                setCurrentQuestion(0);
                setAnswers({});
                setShowResults(false);
              }}>
                Retake Assessment
              </Button>
              <Button variant="secondary" onClick={() => setCurrentQuestion(0)}>
                Review Answers
              </Button>
            </div>
          </div>
        </GlassCard>

        {/* Question Review */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">Review</h3>
          {questions.map((q, i) => (
            <GlassCard key={i} className="p-6">
              <div className="flex items-start gap-4">
                <div className={`
                  p-3 rounded-xl ring-1
                  ${answers[i] === q.correct || (q.type === 'checkbox' && JSON.stringify(answers[i]?.sort()) === JSON.stringify(q.correct.sort()))
                    ? 'bg-emerald-500/10 ring-emerald-500/20'
                    : q.type === 'text'
                    ? 'bg-gray-800 ring-gray-700'
                    : 'bg-rose-500/10 ring-rose-500/20'
                  }
                `}>
                  {answers[i] === q.correct || (q.type === 'checkbox' && JSON.stringify(answers[i]?.sort()) === JSON.stringify(q.correct.sort())) ? (
                    <Check className="w-6 h-6 text-emerald-400" />
                  ) : q.type === 'text' ? (
                    <FileText className="w-6 h-6 text-gray-400" />
                  ) : (
                    <X className="w-6 h-6 text-rose-400" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium mb-2">Question {i + 1}</p>
                  <p className="text-gray-400 text-sm">{q.question}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Knowledge Assessment</h1>
          <p className="text-gray-400">Test your understanding of the material</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-white">{currentQuestion + 1}/{questions.length}</p>
          <p className="text-sm text-gray-500">Questions</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative">
        <div className="h-3 bg-gray-900 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-600 to-indigo-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <p className="text-xs text-gray-500 mt-2">{Math.round(progress)}% Complete</p>
      </div>

      {/* Question Card */}
      <GlassCard className="p-8 lg:p-12">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="space-y-8"
        >
          <div>
            <span className="px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 text-sm font-medium">
              Question {currentQuestion + 1}
            </span>
            <h2 className="text-2xl font-bold text-white mt-4">{currentQ.question}</h2>
          </div>

          {/* Multiple Choice */}
          {currentQ.type === 'multiple' && (
            <div className="space-y-3">
              {currentQ.options.map((option, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(i)}
                  className={`
                    w-full p-5 rounded-xl text-left transition-all duration-200
                    border-2 ${answers[currentQuestion] === i
                      ? 'border-cyan-500 bg-cyan-500/10'
                      : 'border-gray-800 hover:border-gray-700 bg-gray-900/50'
                    }
                  `}
                >
                  <div className="flex items-center gap-4">
                    <div className={`
                      w-6 h-6 rounded-full border-2 flex items-center justify-center
                      ${answers[currentQuestion] === i
                        ? 'border-cyan-500 bg-cyan-500'
                        : 'border-gray-700'
                      }
                    `}>
                      {answers[currentQuestion] === i && (
                        <div className="w-2 h-2 rounded-full bg-white" />
                      )}
                    </div>
                    <span className="text-gray-200 font-medium">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Checkbox */}
          {currentQ.type === 'checkbox' && (
            <div className="space-y-3">
              {currentQ.options.map((option, i) => (
                <button
                  key={i}
                  onClick={() => {
                    const current = answers[currentQuestion] || [];
                    const updated = current.includes(i)
                      ? current.filter(x => x !== i)
                      : [...current, i];
                    handleAnswer(updated);
                  }}
                  className={`
                    w-full p-5 rounded-xl text-left transition-all duration-200
                    border-2 ${(answers[currentQuestion] || []).includes(i)
                      ? 'border-cyan-500 bg-cyan-500/10'
                      : 'border-gray-800 hover:border-gray-700 bg-gray-900/50'
                    }
                  `}
                >
                  <div className="flex items-center gap-4">
                    <div className={`
                      w-6 h-6 rounded-md border-2 flex items-center justify-center
                      ${(answers[currentQuestion] || []).includes(i)
                        ? 'border-cyan-500 bg-cyan-500'
                        : 'border-gray-700'
                      }
                    `}>
                      {(answers[currentQuestion] || []).includes(i) && (
                        <Check className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <span className="text-gray-200 font-medium">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Text Answer */}
          {currentQ.type === 'text' && (
            <textarea
              value={answers[currentQuestion] || ''}
              onChange={(e) => handleAnswer(e.target.value)}
              placeholder="Type your answer here..."
              rows={6}
              className="
                w-full px-6 py-4 rounded-xl
                bg-gray-900 border-2 border-gray-800
                text-white placeholder-gray-500
                focus:outline-none focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/10
                transition-all resize-none
              "
            />
          )}
        </motion.div>
      </GlassCard>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="secondary"
          onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
          disabled={currentQuestion === 0}
        >
          Previous
        </Button>
        <Button onClick={handleNext}>
          {currentQuestion === questions.length - 1 ? 'Submit' : 'Next'}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default Assessment;
