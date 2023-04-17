import React from "react";
import { Formik, useField } from "formik";
import { View, Button, StyleSheet } from "react-native";
import StyledText from "../components/StyledText";
import StyledTextInput from "../components/StyledTextInput";

const initialValues = {
  email: "",
  password: "",
};

const styles = StyleSheet.create({
  form: {
    margin: 12,
  },
  error: {
    color: "red",
    fontSize: 10,
    marginBottom:20,
    marginTop:-5,
  }
});

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  return (
    <>
      <StyledTextInput
      error={meta.error}
        placeholder="E-mail"
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        {...props}
      />
      {meta.error && <StyledText style={styles.error}>
        {meta.error}
      </StyledText>}
    </>
  );
}

const validate = values => {
    const errors = {}
    if(!values.email){
        errors.email = 'Email is required'
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = 'Invalid email address'
}
console.log(errors)
return errors
}
export default function LogInPage() {
  return (
    <Formik
      validate={validate}
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue 
              name="email" 
              placeholder="E-mail" 
            />

            <FormikInputValue
              name="password"
              placeholder="Password"
              secureTextEntry
            />

            <Button onPress={handleSubmit} title="Log In" />
          </View>
        );
      }}
    </Formik>
  );
}
