class Solution {
    public String longestCommonPrefix(String[] strs) {
        if(strs.length == 0) return "";

        String firstString = strs[0];

        for(int i = 0; i < firstString.length(); i++){
            char ch = firstString.charAt(i);

            for(int j = 1; j < strs.length; j++){
                if(i >= strs[j].length() || strs[j].charAt(i) != ch){
                    return firstString.substring(0, i);
                }
            }
        }
        return firstString;
    }
}