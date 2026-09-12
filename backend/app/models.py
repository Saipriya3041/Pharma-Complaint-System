from sqlalchemy import Column, Integer, String, Text, DateTime
from .database import Base
import datetime

class Complaint(Base):
    __tablename__ = "complaints"

    id = Column(Integer, primary_key=True, index=True)
    customer_name = Column(String(100))
    complaint_source = Column(String(50))
    product_name = Column(String(100))
    product_strength = Column(String(50))
    batch_number = Column(String(50))
    affected_quantity = Column(String(100))
    manufacturing_date = Column(String(50))
    expiry_date = Column(String(50))
    description = Column(Text)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
