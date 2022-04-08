package kg.im4.pudding.custom;

import org.junit.Test;

import java.sql.Connection;
import java.sql.DriverManager;

public class MyPostgresConnectionTest {
    private static final String DRIVER = "EMPTY";
    private static final String URL = "EMPTY";
    private static final String ID = "EMPTY";
    private static final String PASS = "EMPTY";

    @Test
    public void testConnection()throws Exception {
        Class.forName(DRIVER);
        try {
            Connection conn = DriverManager.getConnection(URL, ID, PASS);
            System.out.println(conn);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
