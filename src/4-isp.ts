interface UserRepository {
  save(user: object): void;
  // Aqui aplica el ISP porque no se incluye la abstraccion de un metodo que no utilizara el cliente
  // Evitando HeaderInterface
}

class UserRepositoryMySql implements UserRepository {
  save(user: object): void {
    Promise.resolve(user);
    this.flush(user);
  }

  // Metodo especifico de MySql
  private flush(user: object) {
    Promise.resolve(user);
  }
}

class UserRepositoryRedis implements UserRepository {
  save(user: object): void {
    Promise.resolve(user);
  }
}
