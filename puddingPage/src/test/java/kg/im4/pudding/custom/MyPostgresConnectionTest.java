package kg.im4.pudding.custom;

import org.junit.Test;

import java.sql.Connection;
import java.sql.DriverManager;

public class MyPostgresConnectionTest {
    private static final String DRIVER = "org.postgresql.Driver";
    private static final String URL = "jdbc:postgresql://localhost:5432/postgres";
    private static final String ID = "jinhee";
    private static final String PASS = "wlsgml0913";

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
