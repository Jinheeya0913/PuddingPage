package kg.im4.puddingPage.config;

import kg.im4.puddingPage.util.SqlSessionFactoryBean;
import org.apache.ibatis.session.SqlSession;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan(basePackages = {"kg.im4.puddingPage"})
public class ApplicationConfig {

    @Bean
    public SqlSession sqlSession() {
        SqlSession sqlSession;
        sqlSession = SqlSessionFactoryBean.getSqlSessionInstance();
        return sqlSession;
    }
}
