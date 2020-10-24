import { StyleSheet } from "react-native"

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerRow: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textPage: {
    backgroundColor: 'orange',
    padding: 10
  },
  button: {
    marginBottom: 20,
    marginRight: 20,
    padding: 10,
    justifyContent: 'center',

  },
  photo: {
    marginBottom: 20,
    marginRight: 20,
   marginLeft: 15
  },
  darkBg: {
    backgroundColor: '#333'
  },
  login_form: {
    width: "80%",
  },
  login_input: {
    backgroundColor: '#fff',
    fontSize: 20,
    padding: 7,
    marginBottom: 15
  },
  login_msg: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'red',
    marginTop: 10,
    marginBottom: 15
  },
  informacao: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  area_tab: {
    backgroundColor: '#333',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333'
  },
  list: {
    alignItems: "center",
    backgroundColor: "orange",
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text_list: {
    color: "#333",
    fontWeight: 'bold',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'center',
  },
  border_list: {
    borderBottomWidth: 2,
    borderBottomColor: '#333',
  }
});

export { css };