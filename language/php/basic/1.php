<?php
class A{
public $name="hello";
}

class B extends A{

}

$l=new B;
echo $l->name;
echo doubleval("13.51235f");

echo strval(3254.23);

$a=explode(":","ming:ge:huan:dan");

print_r($a);

$b=["ming","ge",1];
$c=implode($b);
print_r($c);

//只能用绝对路径
// $fp=fopen("/home/wuming/product/language/php/basic/2.php","r");
$file=dirname(__FILE__).'/2.php';
$fp=fopen($file,"r");
echo fread($fp,100);
fclose($fp);

//1小时的 cookie
setcookie("cookname","cookvalue",time()+3600);

// 重定向
// header("Location:http://b.com/a.html");
// header("Cache-Control:no-cache,must-revalidate");
// header("http/ 404 Not Found");
// header("Content-type:image/png");


$pattern="/^"
// ^(http://)?([\/]+)/i