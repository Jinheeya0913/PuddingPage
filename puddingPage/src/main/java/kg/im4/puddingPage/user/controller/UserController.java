package kg.im4.puddingPage.user.controller;


import kg.im4.puddingPage.user.dao.MemberDAO;
import kg.im4.puddingPage.user.vo.MemberVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/main/*")
public class UserController {

    @Autowired
    MemberDAO memberDAO;

    @GetMapping("login.do")
    public MemberVO  login(@RequestParam("mail") String mail, @RequestParam("pw") String pw) {

        MemberVO memberVO = new MemberVO();
        MemberVO vo;
        memberVO.setUr_mail(mail);
        memberVO.setUr_pw(pw);

        try {
          vo  = memberDAO.loginMember(memberVO);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
        return vo;
    }

    @GetMapping("myMenu.do")
    public String myMenu(@RequestParam("vo") MemberVO vo) {

        return "myMenu.jsp";
    }



}
