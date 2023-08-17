package cn.itcast.account.service;

public interface AccountService {
    /**
     * 从用户账户中扣款
     */
    void deduct(String userId, int money);
}