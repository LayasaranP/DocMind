# DocMind
# Agentic RAG SaaS – Build Smarter Chatbots & Learning Tools

Agentic RAG SaaS platform: Build multi-tenant customer support chatbots + AI learning tools (flashcards, flowcharts, assessments, deep research) from uploaded documents. Powered by LangGraph, FastAPI, Next.js.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python](https://img.shields.io/badge/python-3.11%2B-blue)](https://www.python.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![LangGraph](https://img.shields.io/badge/LangGraph-1.0+-purple)](https://github.com/langchain-ai/langgraph)

**Production-ready foundation for a modern agentic RAG SaaS platform**  
Create and deploy:
- **Customer support chatbots** for businesses (banks, fintech, e-commerce) – multi-tenant, document-grounded, API-key protected
- **AI learning tools** for students & researchers – auto-generate flashcards, Mermaid flowcharts, quizzes/assessments, deep research summaries

## Core Features (MVP Roadmap)
- Document upload & intelligent parsing (Unstructured.io / LlamaParse)
- Multi-tenant isolation (metadata filtering / namespaces)
- Agentic workflows with LangGraph (ReAct-style routing + tools)
- Embeddings: Voyage-3-large
- LLM support: Claude 3.5 Sonnet / OpenAI o1 / Grok-2
- Frontend: Next.js dashboard + embeddable chatbot widget
- Background ingestion jobs (Celery / arq)
- Observability: LangSmith / Phoenix

## Tech Stack (2026 Edition)
- Backend: FastAPI + Python 3.11+
- Agents: LangGraph + LangChain
- Vector DB: Pinecone serverless / pgvector
- Frontend: Next.js 15+ App Router + shadcn/ui + Tailwind
- Auth: Clerk / Supabase Auth
- Ingestion: Unstructured.io
- Deployment: Vercel (frontend) + Render/Railway/Fly.io (backend)

## Quick Start (Development)

```bash
# Backend
git clone https://github.com/yourusername/agentic-rag-saas.git
cd agentic-rag-saas/backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
# Edit .env with your API keys (OpenAI, Voyage, Pinecone, etc.)
uvicorn app.main:app --reload

# Frontend
cd ../frontend
npm install
npm run dev
