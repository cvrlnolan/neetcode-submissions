class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        sHash, tHash = {}, {}

        for i in range(len(s)):
            if s[i] in sHash:
                sHash[s[i]] += sHash.get(s[i])
            else:
                sHash[s[i]] = 1

            if t[i] in tHash:
                tHash[t[i]] += tHash.get(t[i])
            else:
                tHash[t[i]] = 1

        if len(sHash) != len(tHash):
            return False

        for char, val in sHash.items():
            if not char in tHash or tHash[char] != val:
                return False

        return True
