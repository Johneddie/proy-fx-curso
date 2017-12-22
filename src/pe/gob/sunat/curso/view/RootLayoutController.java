package pe.gob.sunat.curso.view;

import org.controlsfx.dialog.Dialogs;

import javafx.fxml.FXML;
import pe.gob.sunat.curso.MainApp;

/**
 * 
 * @author John
 *
 */
public class RootLayoutController {
	
	@SuppressWarnings("unused")
	private MainApp mainApp;
	
	public void setMainApp(MainApp inicio) {
		this.mainApp = inicio;
	}
	
	@FXML
	private void handleSalir() {
		System.exit(0);
	}
	
	@FXML
	private void handleAcercaDe() {
		 Dialogs
			.create()
			.title("Proyecto SUNAT")
			.masthead("Sistema de Prueba 2017")
			.message("Desarrollado en el curso en QLC")
			.showInformation();
	}
	
}
