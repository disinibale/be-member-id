import ForbiddenRequestException from "./forbiddenRequest.exception";
import NotFoundException from "./notFound.exception";
import UnauthorizedException from "./unauthorized.exception";

const ClientException = {
    ForbiddenRequestException,
    NotFoundException,
    UnauthorizedException,
}

export default ClientException