from sqlalchemy import create_engine
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv(".env.development")

DATABASE_URL = os.getenv("DATABASE_URL")
engine = create_engine(DATABASE_URL)

try:
    with engine.connect() as conn:
        result = conn.execute("SELECT 1")
        print("✅ Database connection successful:", result.scalar())
except Exception as e:
    print("❌ Database connection failed:", e)
