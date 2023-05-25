import { IResponseDto } from '@/api/dto/http.dto';
import * as UserDTO from '@/api/dto/user.dto';
import * as Http from '@/api/http/http';

// Todo Кирилл обещал привести все респонсы к единому формату {data: данные}
export const getUser = async () => {
  return await Http.get<UserDTO.IUserDto>(
    `${process.env.public_api}/user_profile/`
  );
};

export const signIn = async ({
  username,
  password
}: UserDTO.IUserRequestDto) => {
  return await Http.post<
    UserDTO.IUserRequestDto,
    IResponseDto<UserDTO.IUserDto>
  >(`${process.env.public_api}/token/`, {
    username,
    password
  });
};
