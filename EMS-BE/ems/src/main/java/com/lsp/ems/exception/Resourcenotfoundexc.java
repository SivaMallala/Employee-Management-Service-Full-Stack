package com.lsp.ems.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class Resourcenotfoundexc extends RuntimeException{
    public Resourcenotfoundexc(String message){
        super(message);
    }
}
