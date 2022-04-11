package kg.im4.puddingPage.user.vo;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.sql.Date;

@Getter
@Setter
@ToString
public class MemberVO {

    private int ur_code;
    private int ur_pudding;

    private String ur_mail;
    private String ur_name;
    private String ur_pw;
    private Date ur_birth;



}
