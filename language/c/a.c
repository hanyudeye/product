#include <stdio.h>
int main()
{
	// int a = 320;
	int a = 0x4344;
	char *ptr;
	ptr = (char *)&a;
	printf("%x\n", a);
	// printf("%p", &a);
	printf("%c", *ptr);
	return 0;
}