package com.example.Student.Management.Exception;

public class ResourceNotFoundException extends RuntimeException{
    private static final long serialVersionUID = 1L;
    String resourceName;
    String fieldName;
    int fieldValue;

    public ResourceNotFoundException(String resourceName,String fieldName,int fieldValue){
        super(String.format("%s is not found with %s:%s",resourceName,fieldName,fieldValue));
        this.resourceName=resourceName;
        this.fieldName=fieldName;
        this.fieldValue=fieldValue;
    }

    public ResourceNotFoundException(String resourceName)
    {
        super(String.format("%s entered wrongly",resourceName));
        this.resourceName=resourceName;
    }
}
