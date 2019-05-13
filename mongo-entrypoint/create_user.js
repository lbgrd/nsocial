db.createUser(
  {
    user: "tester",
    pwd: "test",
    roles: [
      {
        role: "readWrite",
        db: "nsocial"
      }
    ]
  }
);
