class Solution
{
public:
    vector<vector<int>> threeSum(vector<int> &nums)
    {
        int n = nums.size();
        vector<int> tmp;
        vector<vector<int>> ans;
        sort(nums.begin(), nums.end());
        for (int i = 0; i < n; i++)
        {
            // if(nums[i]>0) break;

            if (i > 0 && nums[i - 1] == nums[i])
            {
                continue;
            }

            int l = i + 1;
            int r = n - 1;
            while (l < r)
            {
                int d = nums[l] + nums[r] + nums[i];
                if (d > 0)
                {
                    r--;
                }
                else if (d < 0)
                {
                    l++;
                }
                else
                {
                    ans.push_back({nums[i], nums[l], nums[r]});
                    while (l < r && nums[l] == nums[l + 1])
                    {
                        l++;
                    }
                    l++;

                    while (l < r && nums[r - 1] == nums[r])
                    {
                        r--;
                    }
                    r--;
                }
            }
        }
        return ans;
    }
};