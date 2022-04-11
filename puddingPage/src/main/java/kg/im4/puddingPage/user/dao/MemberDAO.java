package kg.im4.puddingPage.user.dao;

import kg.im4.puddingPage.user.vo.MemberVO;
import kg.im4.puddingPage.util.SqlSessionFactoryBean;
import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;


@Repository
public class MemberDAO {

    private SqlSession sqlSession;

    private MemberDAO() {
        sqlSession = SqlSessionFactoryBean.getSqlSessionInstance();
    }

    public void createMember(MemberVO vo) {
        sqlSession.insert("MemberDAO.createMember", vo);
    }

    public MemberVO loginMember(MemberVO vo) {
        return sqlSession.selectOne("MemberDAO.loginMember", vo);
    }

    public void deleteMember(MemberVO vo) {
        sqlSession.delete("MemberDAO.deleteMember", vo);
    }

    public void modifyMember(MemberVO vo) {
        sqlSession.update("MemberDAO.modifyMember", vo);
    }
}
