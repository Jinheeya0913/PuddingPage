package kg.im4.puddingPage.admin.dao;

import kg.im4.puddingPage.admin.vo.ArtistVO;
import kg.im4.puddingPage.util.SqlSessionFactoryBean;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class ArtistDAO {

    @Autowired
    private SqlSession sqlSession;

    public void createArtist(ArtistVO vo) {
        sqlSession.insert("createArtist", vo);
    }

    public void modifyArtist(ArtistVO vo) {
        sqlSession.update("modifyArtist", vo);
    }

    public ArtistVO getArtist(ArtistVO vo) {
        return sqlSession.selectOne("getArtist", vo);
    }

    public List<ArtistVO> getArtistList(ArtistVO vo) {
        return sqlSession.selectList("getArtistList", vo);
    }


}
