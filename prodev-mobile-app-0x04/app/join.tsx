import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from "@/styles/_joinstyle";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO } from "@/constants";

export default function Join() {
  return (
    <SafeAreaProvider>
      {/* Container*/}
      <SafeAreaView style={styles.container}>
        
        {/* Top Icon Section */}
        <View style={styles.iconsection}> 
          <TouchableOpacity>
            {/* Using Ionicons for a back arrow  */}
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          {/* Logo */}
          <Image source={HEROLOGOGREEN} /> 
        </View>

        {/* Title Group */}
        <View style={styles.titleTextGroup}>
          <Text style={styles.titleText}>
            Create your Account
          </Text>
          <Text style={styles.subText}>
            Enter your details to create a new account
          </Text>
        </View>

        {/* Form Group for Inputs */}
        <View style={styles.formGroup}>

          {/* Email Input */}
          <Text style={styles.formLabel}>Email</Text>
          <TextInput
            style={styles.formControl}
          />

          {/* Password Input */}
          <Text style={styles.formLabel}>Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput
              style={styles.passwordControl}
            />
            <TouchableOpacity>
              <Ionicons
                name={"eye-off"}
                size={24}
                color="#7B7B7B"
                style={{ paddingRight: 10 }}
              />
            </TouchableOpacity>
          </View>

          {/* Confirm Password Input */}
          <Text style={styles.formLabel}>Confirm Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput
              style={styles.passwordControl}
            />
            <TouchableOpacity>
              <Ionicons
                name={"eye-off"}
                size={24}
                color="#7B7B7B"
                style={{ paddingRight: 10 }}
              />
            </TouchableOpacity>
          </View>
          
          {/* Forgot Password Link */}
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>
              Forgot password?
            </Text>
          </TouchableOpacity>

          {/* Primary Sign up Button */}
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.buttonText}>Create</Text> 
          </TouchableOpacity>
        </View>

        {/* Divider Section */}
        <View style={styles.dividerGroup}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.divider} />
        </View>

        {/* Secondary Buttons (Social Login) */}
        <View style={styles.secondaryButtonGroup}>
          {/* Google Button */}
          <TouchableOpacity style={styles.secondaryButton}>
            <Image source={GOOGLELOGO} />
            <Text style={styles.secondaryButtonText}>Continue with Google</Text>
          </TouchableOpacity>

          {/* Facebook Button */}
          <TouchableOpacity style={styles.secondaryButton}>
            <Image source={FACEBOOKLOGO} />
            <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>

        {/* Sign Up Link at the Bottom */}
        <View style={styles.signupgroup}>
          <Text style={styles.signupTitleText}>Already have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.signupSubTitleText}>Sign in</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}
