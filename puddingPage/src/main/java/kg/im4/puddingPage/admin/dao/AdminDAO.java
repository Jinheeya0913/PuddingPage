package kg.im4.puddingPage.admin.dao;


import kg.im4.puddingPage.admin.vo.AdminVO;
import kg.im4.puddingPage.util.SqlSessionFactoryBean;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class AdminDAO {

    @Autowired
    private SqlSession sqlSession;

// 어드민 생성
    private void createAdmin(AdminVO vo) {
        sqlSession.insert("createAdmin", vo);
    }

// 어드민 로그인
    private AdminVO loginAdmin(AdminVO vo) {
        return sqlSession.selectOne("loginAdmin", vo);
    }

// 어드민 삭제
    private void deleteAdmin(AdminVO vo) {

        if(vo.getAd_super().toUpperCase().equals("Y")){
            sqlSession.delete("deleteAdmin", vo);
        } else {
            System.out.println("삭제 실패 : 슈퍼 관리자가 아님");
        }
    }

//










}
