package kg.im4.puddingPage.admin.dao;


import kg.im4.puddingPage.admin.vo.AdminVO;
import kg.im4.puddingPage.util.AdminSqlSessionFactoryBean;
import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import java.io.Reader;

@Repository
public class ManageDAO {

    private SqlSession sqlSession;

    private ManageDAO() {
        sqlSession = AdminSqlSessionFactoryBean.getSqlSessionInstance();
    }


// 어드민 생성
    public void createAdmin(AdminVO vo) {
        sqlSession.insert("createAdmin", vo);
    }

// 어드민 로그인
    public AdminVO loginAdmin(AdminVO vo) {
        return sqlSession.selectOne("loginAdmin", vo);
    }

// 어드민 삭제
    public void deleteAdmin(AdminVO vo) {
        sqlSession.delete("deleteAdmin", vo);
    }








}
