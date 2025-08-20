import {
  Button,
  Text,
  HStack,
  Input,
  VStack,
  Field,
  Spinner
} from "@chakra-ui/react";
import accessAgentApi from "./api/accessAgentApi";
import { storeTokenInCookie } from "./api/AppCookie";
import { useState } from "react";
import Validation from "./utils/Validation";

interface UserFormProps {
  onSubmitUserData: (token: string, email: string, fullname: string) => void;
  onCancelForm: () => void;
}

interface FormError {
  email: string;
  fullname: string;
}

export default function UserForm({
  onSubmitUserData,
  onCancelForm
}: UserFormProps) {
  const [email, setEmail] = useState<string>("");
  const [fullname, setFullname] = useState<string>("");
  const [formError, setFormError] = useState<FormError>({
    email: "",
    fullname: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const submitUserData = () => {
    if (!Validation.validateEmail(email)) {
      setFormError({ ...formError, email: "Invalid Email" });
      return;
    }
    if (!Validation.validateFullName(fullname)) {
      setFormError({ ...formError, fullname: "Invalid Fullname" });
      return;
    }
    setIsLoading(true);

    accessAgentApi(fullname, email)
      .then(res => {
        const data = res.data;
        storeTokenInCookie(data.token, email, fullname);
        setIsLoading(false);
        setFormError({
          email: "",
          fullname: ""
        });
        onSubmitUserData(data.token, email, fullname);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
      });
  };

  return (
    <VStack>
      <Text color="gray.500" fontSize={{ base: "md", lg: "lg" }}>
        To access Flywell Agent we want personalize our response
      </Text>
      <Field.Root invalid={formError.email !== ""}>
        <Field.Label>Email</Field.Label>
        <Input
          placeholder="Enter your email"
          value={email}
          color="gray.950"
          onChange={e => setEmail(e.target.value)}
        />
        <Field.ErrorText>{formError.email}</Field.ErrorText>
      </Field.Root>
      <Field.Root invalid={formError.fullname !== ""}>
        <Field.Label>Email</Field.Label>
        <Input
          placeholder="Enter your fullname"
          value={fullname}
          color="gray.950"
          onChange={e => setFullname(e.target.value)}
        />
        <Field.ErrorText>{formError.fullname}</Field.ErrorText>
      </Field.Root>

      <HStack>
        <Button onClick={onCancelForm}>Cancel</Button>
        <Button onClick={submitUserData}>
          {isLoading ? <Spinner /> : "Submit"}
        </Button>
      </HStack>
    </VStack>
  );
}
