import os
from dotenv import load_dotenv

# Load correct .env file based on ENV
env = os.getenv("APP_ENV", "development")
if env == "production":
    load_dotenv(".env.production")
else:
    load_dotenv(".env.development")

class Settings:
    DATABASE_URL = os.getenv("DATABASE_URL")
    GROQ_API_KEY = os.getenv("GROQ_API_KEY")
    APP_ENV = env
    APP_PORT = int(os.getenv("APP_PORT", 8000))

settings = Settings()
