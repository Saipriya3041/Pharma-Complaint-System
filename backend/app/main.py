from fastapi import FastAPI
from .routes import complaints, ai_agent
from .database import Base, engine
from .config import settings

app = FastAPI(title=f"Pharma Complaint Management System ({settings.APP_ENV})")

Base.metadata.create_all(bind=engine)

app.include_router(complaints.router, prefix="/complaints", tags=["Complaints"])
app.include_router(ai_agent.router, prefix="/ai", tags=["AI Agent"])
