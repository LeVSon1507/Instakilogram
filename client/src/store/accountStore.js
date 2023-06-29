import { observable, action, makeObservable } from "mobx";

class AccountStore {
  account = null;

  constructor() {
    makeObservable(this, {
      account: observable,
      setAccount: action,
    });
  }

  setAccount(account) {
    this.account = account;
    console.log("account", account);
  }
}

const accountStore = new AccountStore();

export default accountStore;
