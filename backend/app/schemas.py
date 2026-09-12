from pydantic import BaseModel

class ComplaintCreate(BaseModel):
    customer_name: str
    complaint_source: str
    product_name: str
    product_strength: str
    batch_number: str
    affected_quantity: str
    manufacturing_date: str
    expiry_date: str
    description: str
