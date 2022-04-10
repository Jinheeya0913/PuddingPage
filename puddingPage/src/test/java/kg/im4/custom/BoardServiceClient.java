package kg.im4.custom;

import kg.im4.web.board.BoardVO;
import kg.im4.web.board.impl.BoardDAO;

import java.util.List;

public class BoardServiceClient {
    public static void main(String[] args) {
        BoardDAO boardDAO = new BoardDAO();
        BoardVO vo = new BoardVO();

        vo.setTitle("myBatis 테스트");
        vo.setWriter("삼장법사");
        vo.setContent("myBatis 내용");
        boardDAO.insertBoard(vo);
        vo.setSearchCondition("TITLE");
        vo.setSearchKeyword("");
        List<BoardVO> boardList = boardDAO.getBoardList(vo);

        for (BoardVO board : boardList) {
            System.out.println("====>" + board.toString());
        }
    }
}
