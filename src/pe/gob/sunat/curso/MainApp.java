package pe.gob.sunat.curso;

import java.io.IOException;

import javafx.application.Application;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.scene.image.Image;
import javafx.scene.layout.AnchorPane;
import javafx.scene.layout.BorderPane;
import javafx.stage.Modality;
import javafx.stage.Stage;
import pe.gob.sunat.curso.model.Curso;
import pe.gob.sunat.curso.util.Archivo;
import pe.gob.sunat.curso.view.CursoListaController;
import pe.gob.sunat.curso.view.GraficoEstadisticasController;
import pe.gob.sunat.curso.view.RootLayoutController;

/**
 * 
 * @author John
 *
 */
public class MainApp extends Application {

	private Stage escena;
	private BorderPane panel;
	private ObservableList<Curso> cursoData = FXCollections.observableArrayList();

	public ObservableList<Curso> getCursoData() {
		return cursoData;
	}

	public MainApp() {
		Archivo xarchivo = new Archivo();
		cursoData = xarchivo.cargarCursos();
	}
	
	public Stage getEscenarioPrincipal(){
		return this.escena;
	}

	@Override
	public void start(Stage primaryStage) {
		this.escena = primaryStage;
		this.escena.setTitle("Administración de Cursos");
		this.escena.getIcons().add(new Image("file:resources/imagen/logo_sunat32.png"));
		inicializar();
		cargarLista();
	}

	private void cargarLista() {

		try {
			FXMLLoader loader = new FXMLLoader();
			loader.setLocation(MainApp.class.getResource("view/CursoLista.fxml"));
			AnchorPane anchorPane = (AnchorPane) loader.load();
			panel.setCenter(anchorPane);
			CursoListaController controller = loader.getController();
			controller.setMainApp(this);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	private void inicializar() {

		try {
			FXMLLoader loader = new FXMLLoader();
			loader.setLocation(MainApp.class.getResource("view/RootLayout.fxml"));
			panel = (BorderPane) loader.load();
			Scene escena1 = new Scene(panel);
			this.escena.setScene(escena1);
			RootLayoutController scontrol = loader.getController();
			scontrol.setMainApp(this);
			escena.show();
		} catch (IOException e) {
			e.printStackTrace();
		}

	}
	
	public void mostrarEstadisticas() {
		try {
			FXMLLoader cargador = new FXMLLoader();
			cargador.setLocation(MainApp.class.getResource("view/GraficoEstadisticas.fxml"));
			AnchorPane xpanel = (AnchorPane)cargador.load();
			Stage escenario3 = new Stage();
			escenario3.setTitle("Cursos por Ciclo");
			escenario3.initModality(Modality.WINDOW_MODAL);
			escenario3.initOwner(escena);
			Scene visor = new Scene(xpanel);
			escenario3.setScene(visor);
			
			GraficoEstadisticasController xcontrol = cargador.getController();
			xcontrol.cargarDatosEstadistico(cursoData); 
			escenario3.show();
			
		}catch(Exception e) {
			
		}
	}
	

	public static void main(String[] args) {
		launch(args);
	}
}
