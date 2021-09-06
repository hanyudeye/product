// 第一个java 程序

class Zero {

    enum SevenGirl {
        A, B, C, D, E, F, G
    };

    public static void main(String[] args) {

        // 七仙女
        SevenGirl g = SevenGirl.B;

        switch (g) {
            case A:
                System.out.println("GIRL is A");
                break;
            case B:
                System.out.println("GIRL is B");
                break;
            default:
                System.out.println("GIrl is Default");
        }

        String s = "hello,world";
        // 子字符串
        String substr = s.substring(4, 8);
        System.out.println(substr);
        // 字符串查找
        int i = s.indexOf('o', 6);
        System.out.println("index is " + i);

        // 字符串拼接
        String pinjie = "hello" + 32;
        System.out.println(pinjie);

        // 字符串相等
        String s1 = "你好";
        String s2 = "你好";
        boolean sq = s1.equals(s2);
        System.out.println("字符串是否相等" + sq);

        // 字符串为空
        String sNull=null;
        if (sNull != null && sNull != "") {
            System.out.println("字符串不为空");
        }



        System.out.println("This is first java program!");
    }
}
