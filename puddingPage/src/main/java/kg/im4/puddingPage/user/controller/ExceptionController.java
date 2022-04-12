package kg.im4.puddingPage.user.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ExceptionHandler;

@Controller
public class ExceptionController {


    @ExceptionHandler(Exception.class)
    public String except(Exception ex, Model model) {
        return "error.page";
    }
}
