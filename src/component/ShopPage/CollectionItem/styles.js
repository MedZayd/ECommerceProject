import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../../styles/colors";


export const useStyles = makeStyles(() => ({
	card: {
		width: '100%',
		height: 400,
		border: "1px solid #fff",
		borderRadius: "10px",
		margin: 5,
		boxShadow: "0 1px 4px 0 #888888",
		fontSize: 20,
		backgroundColor: colors.white,
		cursor: "pointer"
	},
	header: {
		height: '10%',
		display: 'flex',
		alignItems: "center",
		padding: '5px 20px 5px 20px',
	},
	media: {
		height: '75%',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	content: {
		height: '10%',
		padding: '5px 20px 5px 20px',
		display: 'flex',
		alignItems: "center",
		justifyContent: "flex-end"
	}
}));