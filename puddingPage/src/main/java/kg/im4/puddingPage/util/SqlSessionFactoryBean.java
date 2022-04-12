package kg.im4.puddingPage.util;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import java.io.Reader;


@Component
public class SqlSessionFactoryBean {

    private static SqlSessionFactory sessionFactory = null;

    public SqlSessionFactoryBean() {
        try {
            if (sessionFactory == null) {
                Reader reader = Resources.getResourceAsReader("mybatis-config.xml");
                sessionFactory = new SqlSessionFactoryBuilder().build(reader);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    public static SqlSession getSqlSessionInstance() {
        return sessionFactory.openSession();
    }
}
