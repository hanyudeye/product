// ��һ��java ����

class Zero {

    enum SevenGirl {
        A, B, C, D, E, F, G
    };

    public static void main(String[] args) {

        // ����Ů
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
        // ���ַ���
        String substr = s.substring(4, 8);
        System.out.println(substr);
        // �ַ�������
        int i = s.indexOf('o', 6);
        System.out.println("index is " + i);

        // �ַ���ƴ��
        String pinjie = "hello" + 32;
        System.out.println(pinjie);

        // �ַ������
        String s1 = "���";
        String s2 = "���";
        boolean sq = s1.equals(s2);
        System.out.println("�ַ����Ƿ����" + sq);

        // �ַ���Ϊ��
        String sNull=null;
        if (sNull != null && sNull != "") {
            System.out.println("�ַ�����Ϊ��");
        }



        System.out.println("This is first java program!");
    }
}
