package utils;

import org.apache.commons.lang3.StringUtils;

import java.util.Locale;

public class ConfigReader {

    public static String getEnv() {
        String testEnv = System.getenv("env");
        return StringUtils.isEmpty(testEnv) ? "pqa" : testEnv.toLowerCase();
    }
}