from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import get_db
from .. import models, schemas

router = APIRouter()

@router.post("/")
def create_complaint(complaint: schemas.ComplaintCreate, db: Session = Depends(get_db)):
    new_complaint = models.Complaint(**complaint.dict())
    db.add(new_complaint)
    db.commit()
    db.refresh(new_complaint)
    return new_complaint

@router.get("/")
def list_complaints(db: Session = Depends(get_db)):
    return db.query(models.Complaint).all()
