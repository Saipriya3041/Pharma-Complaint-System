from fastapi import APIRouter
from groq import Groq
from ..config import settings

router = APIRouter()
groq_client = Groq(api_key=settings.GROQ_API_KEY)

@router.post("/extract")
def extract_complaint(data: dict):
    text = data.get("text", "")
    response = groq_client.chat.completions.create(
        model="gemma2-9b-it",
        messages=[
            {"role": "system", "content": "You are an AI assistant for pharma complaint extraction."},
            {"role": "user", "content": f"Extract structured complaint details from: {text}"}
        ]
    )
    return {"parsed": response.choices[0].message.content}
