标准答案是用 two pointer 来标志每一个 unique 的数字，然后不断的向前加

```java
public int removeDuplicates(int[] nums) {
    if (nums.length == 0) return 0;
    int i = 0;
    for (int j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}
```

但是并没有去除掉所有的重复的值， 性能是要好很多
