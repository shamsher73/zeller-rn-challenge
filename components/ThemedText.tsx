import { Text, type TextProps, StyleSheet } from 'react-native';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'primary' | 'secondary';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {

  return (
    <Text
      style={[
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'primary' ? styles.primary : undefined,
        type === 'secondary' ? styles.secondary : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    fontWeight: '400',
  },
  primary: {
    fontSize: 16,
    fontWeight: '400',
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
  },
  secondary: {
    fontSize: 12,
    fontWeight: '300',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
});
