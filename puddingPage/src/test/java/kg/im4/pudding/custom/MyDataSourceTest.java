package kg.im4.pudding.custom;


import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;

import javax.inject.Inject;
import javax.sql.DataSource;
import java.sql.Connection;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"file:src/main/webapp/WEB-INF/spring/**/*.xml"})
@TestExecutionListeners(listeners ={DependencyInjectionTestExecutionListener.class} )
public class MyDataSourceTest {

//   DataSource 연결 테스트 진행

    @Inject
    private DataSource ds;

    @Test
    public void testConnection() throws Exception{
        try (Connection conn = ds.getConnection()) {
            System.out.println(conn);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }



}
