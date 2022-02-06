import { Controller, Get, Param, Query, Req, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get("id/:id")
  getUserById(@Param("id") userId) {
    return this.usersService.fetchUserById(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get("email/:email")
  getUserByEmail(@Param("email") email) {
    return this.usersService.fetchUserByEmail(email);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getAllUsers() {
    return this.usersService.fetchUsers();
  }
}
