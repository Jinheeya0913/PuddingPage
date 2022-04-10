package kg.im4.puddingPage.work.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class WebtoonVO {

    private int pd_seq;
    private int wt_subscribe;

    private String wt_title;
    private String wt_writer;
    private String wt_artistCode;
    private String wt_img;
    private String wt_pudding;
    private String wt_isDone;
    private String wt_genre;
    private String wt_day;
    private String wt_hashTag;
    private String wt_description;

}
